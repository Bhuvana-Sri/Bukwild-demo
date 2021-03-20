// Component containing Header and Sub header

import { Grid } from "semantic-ui-react";
import { string } from "prop-types";

function Content({ subhead }) {
  return (
    <div className="content animate">
      <Grid doubling columns={2}>
        <Grid.Column>
          <div className="content-header">Lorem ipsum dolar sit amet</div>
        </Grid.Column>
        <Grid.Column>
          <div className="content-subheader">{subhead}</div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

Content.propTypes = {
  subhead: string.isRequired,
};

export default Content;
