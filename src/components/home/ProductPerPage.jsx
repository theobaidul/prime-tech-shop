import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ProductPerPage({ onLimitChange, currentLimit }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="bg-gray-100 px-4 py-2">{currentLimit}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onLimitChange(10)}>
          10
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLimitChange(15)}>
          15
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLimitChange(20)}>
          20
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLimitChange(25)}>
          25
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
