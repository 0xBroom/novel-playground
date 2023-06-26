import Editor from "@/ui/editor";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="absolute bottom-5 right-5 max-h-fit rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto sm:top-5">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
        <Editor />
      </div>
    </>
  );
}
