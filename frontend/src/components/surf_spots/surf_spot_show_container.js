import { connect } from "react-redux";
import SurfSpotShow from "./surf_spot_show";
import { getSingleSurfSpot, closeSuggestions } from "../../actions/surf_spot_actions";

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.spot_id;
  return {
    spot: state.entities.surfSpots[id],
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => ({
  getSingleSurfSpot: id => dispatch(getSingleSurfSpot(id)),
  closeSuggestions: () => dispatch(closeSuggestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurfSpotShow);
