import { x } from '@xstyled/styled-components';
import { H2 } from 'components/font-styles';
import PropTypes from 'prop-types';
import { StepCounter } from 'components/StepCounter';
import { FoodItem } from 'components/FoodItem';

export const CenterFoodScreen = ({ step }) => {
  return (
    <>
      <StepCounter step={step} />
      <x.div
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        mb="50px"
      >
        <x.div
          w={{ _: '100%', lg: 'unset' }}
          px="27px"
          py="40px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        >
          <H2 mb={{ _: '45px', lg: '65px' }} textAlign="center">
            Modificar alimentos
          </H2>
          {foods.map((food, index) => (
            <FoodItem
              key={index}
              food={food}
              mb={index !== foods.length - 1 && { _: '20px', lg: '35px' }}
            />
          ))}
        </x.div>
        <H2 textAlign="center">Manten actualizada tu información</H2>
      </x.div>
    </>
  );
};

const foods = [
  {
    name: 'Fideos',
    amount: 2,
    unitMeasurement: 'KG'
  },
  {
    name: 'Agua',
    amount: 10,
    unitMeasurement: 'L'
  },
  {
    name: 'Harina',
    amount: 3,
    unitMeasurement: 'KG'
  }
];

CenterFoodScreen.propTypes = {
  step: PropTypes.number.isRequired
};
