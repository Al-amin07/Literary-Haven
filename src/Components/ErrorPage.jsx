import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="min-h-screen flex flex-col items-center justify-center  ">
      <div className="shadow-2xl rounded-xl p-12">
      <h1 className="text-5xl font-bold text-center mb-4">Oops!!!</h1>
      <p className="text-2xl font-semibold text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-4xl text-center font-bold mt-2">
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  );
};

export default ErrorPage;