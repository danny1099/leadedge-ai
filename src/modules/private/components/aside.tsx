interface AsideProps {
  child: React.ReactNode;
}

export const Aside = ({ child }: AsideProps) => {
  return (
    <aside className="bg-background border-border col-start-1 row-span-2 row-start-1 flex flex-col border-r max-sm:hidden sm:w-52 md:w-72 lg:w-80">
      {child}
    </aside>
  );
};
