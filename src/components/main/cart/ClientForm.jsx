import { useState, useEffect } from "react";
import { Link as ReachLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  Stack,
  Text,
  Heading,
  Divider,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Switch,
  Select,
  Checkbox,
  FormErrorMessage,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";

/*---------------------------------------------------------------------*/

const ClientForm = () => {
  const [clientData, setClientData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box my="2rem" borderWidth="1px" borderColor="neutralLight" />
        <Heading fontSize="1rem" mb="1rem">
          Customer information
        </Heading>
        <Stack flexDirection="row" gap="2rem" alignItems="baseline">
          <FormControl isInvalid={errors.firstName}>
            <Input
              id="firstName"
              placeholder="First name"
              type="text"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <FormErrorMessage>
              {errors.firstName && errors.firstName?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.lastName}>
            <Input
              id="lastName"
              placeholder="Last name"
              type="text"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName?.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>

        <FormControl isInvalid={errors.email} mt="1rem">
          <Input
            id="email"
            placeholder="youremail@example.com"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "El formato no es correcto",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.phone} mt="1rem">
          <InputGroup>
            <InputLeftAddon children="+54" />
            <Input
              id="phone"
              type="tel"
              placeholder="1234-5678"
              {...register("phone", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "El formato no es correcto",
                },
              })}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.country} mt="1rem">
          <Select
            placeholder="Select your country"
            id="country"
            {...register("country", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          >
            <option value="Argentina">Argentina</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Uzbekistan">Uzbekistan</option>
          </Select>
          <FormErrorMessage>
            {errors.country && errors.country.message}
          </FormErrorMessage>
        </FormControl>

        <Box my="2rem" borderWidth="1px" borderColor="neutralLight" />
        <Heading fontSize="1rem" mb="1rem">
          Payment information
        </Heading>

        <FormControl isInvalid={errors.paymentMethod} mt="1rem">
          <Select
            placeholder="Select your payment method"
            id="paymentMethod"
            {...register("paymentMethod", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card" disabled>
              Debit Card
            </option>
          </Select>
          <FormErrorMessage>
            {errors.paymentMethod && errors.paymentMethod.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.cardOwner} mt="1rem">
          <Input
            id="cardOwner"
            placeholder="Name on card"
            value="Pepito Sanchez Rodriguez Ortiz del Corazón de Jesús"
            type="text"
            {...register("cardOwner", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
          />
          <FormHelperText fontSize="0.8rem" color="neutral">
            Needs to be exactly as in the card.
          </FormHelperText>
          <FormErrorMessage>
            {errors.cardOwner && errors.cardOwner?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.cardNumber} mt="1rem">
          <Input
            id="cardNumber"
            placeholder="Card number"
            value="4273433812838"
            type="number"
            {...register("cardNumber", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^4[0-9]{12}(?:[0-9]{3})?$/,
                message: "El formato no es correcto",
              },
            })}
          />
          <FormErrorMessage>
            {errors.cardNumber && errors.cardNumber?.message}
          </FormErrorMessage>
        </FormControl>

        <Stack flexDirection="row" gap="2rem" alignItems="baseline">
          <FormControl isInvalid={errors.cardExpiration} mt="1rem">
            <Input
              id="cardExpiration"
              value="2025-05"
              type="month"
              {...register("cardExpiration", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <FormErrorMessage>
              {errors.cardExpiration && errors.cardExpiration?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.cardSecurityNumber} mt="1rem">
            <Input
              id="cardSecurityNumber"
              placeholder="CCV / CVV"
              value="274"
              type="number"
              {...register("cardSecurityNumber", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: "El formato no es correcto",
                },
              })}
            />
            <FormErrorMessage>
              {errors.cardSecurityNumber && errors.cardSecurityNumber?.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>

        <FormControl isInvalid={errors.cardStealing} mt="1rem">
          <Checkbox
            mt="1rem"
            defaultChecked
            colorScheme="green"
            {...register("cardStealing", {
              required: {
                value: true,
                message: "Don't worry, just accept!",
              },
            })}
          >
            I have read the terms and conditions and I accept that my personal
            data is sold to third parties.
          </Checkbox>
          <FormErrorMessage>
            {errors.cardStealing && errors.cardStealing?.message}
          </FormErrorMessage>
        </FormControl>

        <Stack flexDirection="row-reverse" alignItems="baseline" gap="1rem">
          <Button
            mt="2rem"
            color="white"
            backgroundColor="green.400"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
          <Button as={ReachLink} to="/cart" bgColor="white" color="neutral">
            Return to cart
          </Button>
          <FormControl display="flex" alignItems="center" m="auto">
            <FormLabel
              htmlFor="spam"
              color="neutral"
              mb="0"
              fontWeight="300"
              fontSize="0.9rem"
            >
              Quiero enterarme de las mejores ofertas antes que nadie! (spam)
            </FormLabel>
            <Switch id="spam" colorScheme="green" size="sm" defaultChecked />
          </FormControl>
        </Stack>
      </form>
    </Stack>
  );
};

export default ClientForm;
