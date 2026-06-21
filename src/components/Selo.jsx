function Selo({ texto = "Promoção", cor = "green" }) {
  return (
    <span
      style={{
        backgroundColor: cor,
        color: "white",
        padding: "5px",
        borderRadius: "5px"
      }}
    >
      {texto}
    </span>
  )
}

export default Selo