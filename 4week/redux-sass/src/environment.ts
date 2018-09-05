const dev = {
  context: 'http://localhost:3000/'
}

const prod = {
  context: 'http://ec2-54-88-108-238.compute-1.amazonaws.com:3000/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
