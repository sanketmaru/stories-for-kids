// mostly code from reactjs.org/docs/error-boundaries.html
import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false , redirect: false};
  static getDerivedStateFromError(): {hasError: boolean, redirect: boolean} {
    return { hasError: true, redirect: false };
  }
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate(): void {
    // if(this.state.hasError) {

    // }
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;