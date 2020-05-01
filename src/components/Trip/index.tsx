import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import * as ITF from "../../interface/trip";
import { connect } from "react-redux";
import TripItem from './tripItem';

interface ITripProps {
  trips: Array<ITF.Trip>
}

const Trip: React.FunctionComponent<ITripProps> = (props) => {
  const elmTrip = props.trips.map((trip: ITF.Trip) => {
    return <TripItem key={trip._id} trip={trip} />
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="text-center py-2">
        <Typography variant="h3" className="trips-title">
          Bus tickets
        </Typography>
        <Typography variant="body1">
          You can book a ticket then select the place on the bus
        </Typography>
      </div>
      <Container maxWidth="md">
        {elmTrip}
      </Container>

    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return { trips: state.trips }
}

export default connect(mapStateToProps)(Trip);
