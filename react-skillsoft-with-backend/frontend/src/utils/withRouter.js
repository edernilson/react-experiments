import { useLocation, useNavigate, useParams } from "react-router-dom";

/**
 * Custom HOC to inject router props into class components
 */
export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}