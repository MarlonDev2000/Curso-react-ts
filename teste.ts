const ZE_DELIVERY_IDADE = 6
const ZE_DELIVERY_NOTA_GLASSDOOR = 4.4


const aRespostaSobreVidaUniversoTodasAsCoisas = () => {
      return 42
}

const tokenSecreto = (): number => {
      const respostaFundamental = aRespostaSobreVidaUniversoTodasAsCoisas()

      return respostaFundamental > 30
            ? respostaFundamental * ZE_DELIVERY_IDADE
            : respostaFundamental * ZE_DELIVERY_NOTA_GLASSDOOR
}