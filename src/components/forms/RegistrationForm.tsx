"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { handleRegistration } from "@/app/actions";
import { courses } from "@/lib/constants";

/* -------------------- Schema -------------------- */
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits."),
  course: z.string().min(1, "Please select a course."), // TITLE ONLY
  mode: z.enum(["Online", "Offline", "Hybrid"]),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function RegistrationForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      course: "",
      mode: "Online",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  /* -------------------- URL → COURSE TITLE SYNC -------------------- */
  useEffect(() => {
    const courseParam = searchParams.get("course"); // slug
    if (!courseParam) return;

    const matchedCourse = courses.find(
      (c) => c.slug === courseParam
    );

    if (matchedCourse) {
      form.setValue("course", matchedCourse.title, {
        shouldDirty: false,
        shouldTouch: false,
        shouldValidate: true,
      });
    }
  }, [searchParams, form]);

  /* -------------------- Submit -------------------- */
  async function onSubmit(data: FormData) {
    const result = await handleRegistration(data);

    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
      });

      form.reset({
        fullName: "",
        email: "",
        mobile: "",
        course: "",
        mode: "Online",
        message: "",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.message,
      });
    }
  }

  /* -------------------- UI -------------------- */
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email & Mobile */}
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="9876543210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Course Select (TITLE AS VALUE) */}
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Interested In</FormLabel>

              <Select
                key={field.value} // 🔥 forces visual sync
                value={field.value}
                onValueChange={field.onChange}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem
                      key={course.slug}
                      value={course.title}
                    >
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mode */}
        <FormField
          control={form.control}
          name="mode"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Preferred Mode</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col md:flex-row gap-4"
                >
                  {["Online", "Offline", "Hybrid"].map((mode) => (
                    <FormItem
                      key={mode}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={mode} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {mode}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message / Query (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any specific questions you have..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Register
        </Button>
      </form>
    </Form>
  );
}
