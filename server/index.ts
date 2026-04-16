import { Hono } from 'hono'
import authors from './routes/authors'
import books from './routes/books'

const app = new Hono().basePath('/api')

app.route('/authors', authors)
app.route('/books', books)

export default app
