
export default function InfoCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
      <div className="bg-primary/10 p-3 rounded-lg mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-foreground">{title}</h3>
        <div className="text-muted-foreground">{content}</div>
      </div>
    </div>
  );
}
