import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_EVENTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';



function EventList() {
  const [state, dispatch] = useStoreContext();

  // console.log(state);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_EVENTS);
console.log('hi', data);
  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_EVENTS,
  //       events: data.events,
  //     });
  //     data.events.forEach((event) => {
  //       idbPromise('events', 'put', event);
  //     });
  //   } else if (!loading) {
  //     idbPromise('events', 'get').then((events) => {
  //       dispatch({
  //         type: UPDATE_EVENTS,
  //         events: events,
  //       });
  //     });
  //   }
  // }, [data, loading, dispatch]);

  function filterEvents() {
    if (!currentCategory) {
      return state.events;

    }

    return state.events.filter(
        console.log(state.events),

      (event) => event.category._id === currentCategory
    );
  }
  // console.log(state.events);

  return (
    <div className="my-2">
      <h2>Art Events:</h2>
      {state.events.length ? (
        <div className="flex-row">
          {filterEvents().map((event) => (
            <ProductItem
              key={event._id}
              _id={event._id}
              imageLink={event.imageLink}
              name={event.name}
              date={event.date}
              description={event.description}
              locationName={event.locationName}
              locationAddress={event.locationAddress}
              category={event.category}
              link={event.link}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any events yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default EventList;
