import { useEffect } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';

export const Home = () => {
  const [state, actions] = useCounterContext();
  return (
    <div>
      <Heading />

      <div>
        <Button onButtonClick={actions.increase}> INCREASE</Button>
        <Button onButtonClick={actions.decrease}> DECREASE</Button>
        <Button onButtonClick={actions.reset}> RESET</Button>
        <Button onButtonClick={() => actions.setCounter(10)}> Set 10</Button>
        <Button disabled={state.loading} onButtonClick={() => actions.asyncIncreaseStart()}>
          ASYNC INCREASE
        </Button>
        <Button disabled={state.loading} onButtonClick={() => actions.asyncIncreaseError()}>
          ASYNC Error
        </Button>
      </div>
    </div>
  );
};
