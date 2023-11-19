import Error404 from '@assets/images/error-404.svg'
function NotFound() {
  return (
    <div style={{ height: '600px' }}>
      <img
        src={Error404}
        alt="Pagina-no-encontrada"
        height="100%"
        width="100%"
      />
    </div>
  )
}

export default NotFound
