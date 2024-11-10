export default function handler(req, res) {
    const { email, password } = req.body
       
    if (email === process.env.LOGIN_EMAIL && password === process.env.LOGIN_PASSWORD) {
      res.status(200).json({ message: 'Login successful' })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  }
  