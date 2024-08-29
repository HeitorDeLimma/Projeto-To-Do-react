import './styles.css'
import '../../styles/global.css'

export default function Home() {
  return (
    <main>
      <section className='toAdd'>
        <h1>Agendador de Tarefas</h1>

        <p>Agende suas tarefas e organize sua rotina!</p>

        <label>Nome da Tarefa</label>
        <input type="text" placeholder='Digite o nome da sua tarefa' required />

        <button>Adicionar tarefa</button>
      </section>

      <section>
        <div className='diary'>
          <input type="checkbox" />
          <h3>Cabeleleiro</h3>
          <img src="../../assets/removeIcon.png" alt="Remove Icon" />
        </div>
      </section>
    </main>
  )
}