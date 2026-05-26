import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export function IconPicker({ name, className = 'w-6 h-6' }: { name: string; className?: string }) {
  const icons: Record<string, LucideIcon> = {
    video: Icons.Video,
    layout: Icons.Layout,
    'hard-drive': Icons.HardDrive,
    'message-circle': Icons.MessageCircle,
    table: Icons.Table,
    'message-square': Icons.MessageSquare,
    calendar: Icons.Calendar,
    mail: Icons.Mail,
    'file-text': Icons.FileText,
    cloud: Icons.Cloud,
    'bar-chart': Icons.BarChart,
    settings: Icons.Settings,
  };

  const IconComponent = icons[name] || Icons.Circle;

  return <IconComponent className={className} />;
}
