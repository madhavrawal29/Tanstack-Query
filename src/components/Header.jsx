import { useIsFetching } from "@tanstack/react-query";

export default function Header({ children }) {
  const fetching = useIsFetching();
  // when the data in fetched then fetching value is 0 and
  // if the data is not fetched or in the fecthing condition fetching value will be greater than 0
  return (
    <>
      <div id="main-header-loading">{fetching > 0 && <progress />}</div>

      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
