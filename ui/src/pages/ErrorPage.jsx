import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  // console.error(error);
  return (
    <div className="flex flex-col w-full items-center justify-center gap-5 h-screen">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p className="text-center font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-center text-secondaryText">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
