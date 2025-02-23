import Link from "next/link";
const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Hello manav</p>
      <div>
        Click here{" "}
        <Link href={"/documents/123"}>
          <span className="underline">click</span>
        </Link>{" "}
        to go to documents page
      </div>
    </div>
  );
};

export default Home;
