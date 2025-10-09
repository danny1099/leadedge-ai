interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

export const Brand = ({ className, ...props }: Props) => {
  return (
    <span {...props} className="text-foreground text-lg font-semibold">
      LeadEdge
      <span className="ml-1 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
        AI
      </span>
    </span>
  );
};
