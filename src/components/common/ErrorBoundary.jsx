import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-primary-bg flex items-center justify-center p-6">
          <div className="bg-card-bg rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <h2 className="text-xl font-bold text-primary-text mb-2">
              Oops! Something went wrong
            </h2>

            <p className="text-gray-400 mb-6">
              We encountered an unexpected error. Please refresh the page or try
              again later.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="bg-accent-yellow text-primary-bg px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Refresh Page
            </button>

            {import.meta.env.DEV && (
              <details className="mt-6 text-left">
                <summary className="text-accent-yellow cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-primary-bg p-4 rounded-lg text-xs text-gray-300 overflow-auto">
                  <p className="text-red-400 font-semibold mb-2">
                    {this.state.error && this.state.error.toString()}
                  </p>
                  <pre className="whitespace-pre-wrap">
                    {this.state.errorInfo &&
                      this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
