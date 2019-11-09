import ReactDOM from "react-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit

import ApolloProvider from "./ApolloProvider";
console.log(ApolloProvider);

ReactDOM.render(ApolloProvider, document.getElementById("root"));
