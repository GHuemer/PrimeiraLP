import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Phone, MessageCircle, Clock, MapPin, CheckCircle, Star, ChevronDown } from 'lucide-react'
import './App.css'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const benefits = [
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Instalação Gratuita",
      description: "Nosso especialistas realizam o serviço sem custo adicional."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Pague na entrega",
      description: "Chegamos até você em poucos minutos e você só paga na entrega."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Atendimento 24h",
      description: "Disponível para você todos os dias, inclusive domingos e feriados."
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Cobertura em Recife e região",
      description: "Garantia de suporte rápido onde você estiver."
    }
  ]

  const steps = [
    {
      number: "1",
      title: "Solicite sua bateria",
      description: "Entre em contato pelo WhatsApp ou telefone e informe o ano e modelo do seu carro e nosso time de especialistas irá ajudar."
    },
    {
      number: "2",
      title: "Receba em instantes",
      description: "Aguarde que nossos profissionais irão até você em poucos minutos, com a bateria ideal para seu carro ou moto."
    },
    {
      number: "3",
      title: "Aguarde a instalação",
      description: "Nossos especialistas irão realizar a instalação da bateria no local combinado, tudo isso sem custo adicional para você."
    }
  ]

  const features = [
    { title: "Durabilidade", description: "Maior vida útil e maior garantia do mercado" },
    { title: "Confiável", description: "Peça original das maiores montadoras do mundo" },
    { title: "Inovação", description: "Referência mundial em tecnologia de baterias" },
    { title: "Tecnologia antivazamento", description: "Tampa anti vazamento que impede o vazamento da solução eletrolítica" },
    { title: "Eficiência", description: "A bateria que mais entrega carga em todo momento" },
    { title: "Líder em vendas", description: "A bateria mais vendida em toda a américa latina" },
    { title: "Sustentável", description: "Produção recicla 100% de suas baterias usadas." },
    { title: "Resistência a vibrações", description: "Placas laminadas, o que as torna mais resistentes a vibrações e ciclagens" }
  ]

  const testimonials = [
    {
      name: "Edson Junior",
      rating: 5,
      comment: "Atendimento perfeito personalizado e rapidão....parabéns pelo trabalho executado....."
    },
    {
      name: "Matheus Albuquerque",
      rating: 5,
      comment: "Muito bom o atendimento e o preço. Saindo com a certeza de ter feito o melhor negócio."
    },
    {
      name: "Juliana Santos",
      rating: 5,
      comment: "Atendimento maravilhoso, rápido, prático, produto de qualidade e agilidade na entrega"
    }
  ]

  const faqs = [
    {
      question: "Como saber se minha bateria precisa ser trocada?",
      answer: "Se o veículo apresenta dificuldades na partida, luzes fracas ou falhas elétricas frequentes, provavelmente chegou a hora de trocar a bateria."
    },
    {
      question: "Quanto tempo leva a instalação da nova bateria?",
      answer: "A instalação é rápida e leva em média de 15 a 30 minutos, dependendo do modelo do veículo."
    },
    {
      question: "Como faço para solicitar a troca da bateria?",
      answer: "Você pode entrar em contato conosco pelo WhatsApp ou telefone, informando o ano e modelo do seu veículo."
    },
    {
      question: "Posso parcelar minha bateria? Tem juros?",
      answer: "Sim! Você pode parcelar em até 10x sem juros no cartão de crédito."
    },
    {
      question: "Como faço o pagamento?",
      answer: "Aceitamos pagamento em dinheiro, PIX, cartão de débito e crédito na entrega."
    },
    {
      question: "O serviço funciona aos finais de semana e feriados?",
      answer: "Sim! Nosso atendimento é 24 horas, todos os dias da semana, inclusive finais de semana e feriados."
    },
    {
      question: "Qual o valor da entrega?",
      answer: "A entrega é totalmente gratuita para Recife e região metropolitana."
    },
    {
      question: "Qual o valor da instalação?",
      answer: "A instalação é 100% gratuita! Nossos especialistas realizam o serviço sem custo adicional."
    },
    {
      question: "A bateria tem garantia?",
      answer: "Sim! Todas as nossas baterias possuem garantia de fábrica, que varia de acordo com o modelo."
    },
    {
      question: "Vocês atendem apenas carros ou motos também?",
      answer: "Atendemos tanto carros quanto motos, com baterias específicas para cada tipo de veículo."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-blue-900">JL</span>
              <span className="text-yellow-400">BATERIAS</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="hidden md:flex items-center gap-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              <Phone className="w-4 h-4" />
              (81) 98720-0047
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Peça no WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-blue-900 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 leading-tight">
                Precisou de bateria?<br />
                <span className="text-blue-900">Troque agora e pague em</span><br />
                <span className="text-blue-900">até 10x sem juros!</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-900 mb-8 font-semibold">
                Entrega super rápida e instalação grátis, 24h por dia em Recife e região!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Peça no WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="bg-blue-900 text-white hover:bg-blue-800 text-lg px-8 py-6 flex items-center gap-2 border-2 border-white">
                  <Phone className="w-6 h-6" />
                  Ligue agora
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-blue-800 rounded-lg flex items-center justify-center">
                <div className="text-white text-6xl font-bold">MOURA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Entrega super rápida e instalação grátis
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Com nossos profissionais, você recebe todo auxílio necessário com agilidade e segurança!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors">
                <div className="flex justify-center mb-4 text-yellow-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-200">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 flex items-center gap-2 mx-auto">
              <MessageCircle className="w-6 h-6" />
              Peça agora pelo whatsapp
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
            Baterias para todas as marcas
          </h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            Aqui você encontra as principais baterias ideais para seu carro ou moto
          </p>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Como pedir sua bateria?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors">
                <h3 className="text-lg font-bold mb-2 text-yellow-400">{feature.title}</h3>
                <p className="text-sm text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            Milhares de clientes satisfeitos!
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            Veja o que nossos clientes dizem sobre nós
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-bold text-blue-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Confira as principais dúvidas sobre troca de baterias
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
                >
                  <span className="font-semibold text-blue-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-900 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold mb-4">
            <span className="text-white">JL</span>
            <span className="text-yellow-400">BATERIAS</span>
          </div>
          <p className="text-gray-300 mb-4">
            Entrega super rápida e instalação grátis, 24h por dia em Recife e região!
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (81) 98720-0047
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            © 2025 JL Baterias. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5581987200047?text=Quero%20comprar%20a%20matéria%20tal"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  )
}

export default App

