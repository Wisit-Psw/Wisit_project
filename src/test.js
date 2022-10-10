import * as React from "react";

import { MathComponent } from "mathjax-react";

class MJAX extends React.Component {
  render() {
    return <MathComponent tex={'root(5-((5/5)*5)^5)'} />;
  }
}
export default MJAX;