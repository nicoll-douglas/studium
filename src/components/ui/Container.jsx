export default function Container({ children }) {
  return (
    <div className="flex flex-col gap-4 w-[500px] lg:w-[390px] sm:w-full">
      {children}
    </div>
  );
}
