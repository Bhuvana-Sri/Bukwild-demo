// Component containing cta and Let's talk button

import { Grid, Icon } from "semantic-ui-react";
import { string } from "prop-types";

function CTA({ cta }) {
  return (
    <div className="cta">
      <Grid doubling columns={2}>
        <Grid.Column>
          <div className="cta-text animate">{cta}</div>
        </Grid.Column>
        <Grid.Column>
          <button className="cta-button">
            LET'S TALK.
            <Icon className="arrow" name="long arrow alternate right" />
          </button>
        </Grid.Column>
      </Grid>
    </div>
  );
}

CTA.propTypes = {
  cta: string.isRequired,
};

export default CTA;
