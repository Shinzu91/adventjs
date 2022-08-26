const TICKET_PRICE = 12;
const FIDELITY_CARD = 250;
const FIDELITY_TICKET_PRICE = 0.75;

const calculateFidelityTicketPrice = (times) => {
  if (times < 1) {
    return FIDELITY_TICKET_PRICE;
  }

  return FIDELITY_TICKET_PRICE * calculateFidelityTicketPrice(times - 1);
};

export default function shouldBuyFidelity(times) {
  let fidelityPrice = FIDELITY_CARD;
  let fullPrice = 0;

  for (let i = 0; i < times; ++i) {
    fidelityPrice = fidelityPrice + TICKET_PRICE * calculateFidelityTicketPrice(i);
    fullPrice = fullPrice + TICKET_PRICE;
  }

  return fidelityPrice < fullPrice;
}
