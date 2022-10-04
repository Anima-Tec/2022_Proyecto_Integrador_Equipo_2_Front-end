import { x } from '@xstyled/styled-components';
import { H2, P } from 'components/font-styles';
import PropTypes from 'prop-types';
import { ContactButton } from 'components/buttons/ContactButton';
import { NeedFoodList } from 'components/centers/NeedFoodsList';
import { StepCounter } from 'components/StepCounter';

export const CenterInformationScreen = ({ step }) => {
  return (
    <>
      <StepCounter step={step} />
      <x.div
        w="100%"
        px={{ _: 10, lg: 20 }}
        mt="10px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <H2 fontWeight="bold" mb="35px">
          Banco Silertoll
        </H2>
        <x.div mb="42px">
          <P fontWeight="bold" mb="20px">
            Ubicación
          </P>
          <x.img
            src="/mapa.png"
            w={{ _: '302px', lg: '352px' }}
            h={{ _: '166', lg: '216' }}
            mb="5px"
          />
          <P fontSize="12px" textAlign="center" color="#555555">
            Trueba 2345 esquina Maldonado
          </P>
        </x.div>
        <NeedFoodList foods={foods} />
        <ContactButton type="GMAIL" mb="30px" mt="42px" cursor="default" />
        <ContactButton type="WHATSAPP" mb="30px" cursor="default" />
      </x.div>
    </>
  );
};

CenterInformationScreen.propTypes = {
  step: PropTypes.number.isRequired
};

export const foods = [
  {
    id: 'q',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'w',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'e',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'r',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 't',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'q',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'w',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'e',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'r',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 't',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'q',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'w',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'e',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'r',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 't',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'q',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'w',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'e',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 'r',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  },
  {
    id: 't',
    name: 'string',
    category: 'string',
    amount: 213,
    unitMeasurement: 'KG'
  }
];
