export default function Footer() {
  return (
    <footer style={{
      padding: '30px 0',
      borderTop: '1px solid #191919',
      textAlign: 'center',
    }}>
      <p style={{ color: '#a0a0a0', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} Rahul Rathod. All rights reserved.
      </p>
    </footer>
  )
}