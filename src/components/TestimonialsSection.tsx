import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import teacherCarla from "@/assets/teacher-carla.jpg";
import teacherRodrigo from "@/assets/teacher-rodrigo.jpg";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Prof. Carla",
      role: "Educação Infantil",
      image: teacherCarla,
      text: "A Aulix salvou meu tempo! Em vez de passar o domingo fazendo relatórios, agora resolvo tudo em 10 minutos.",
      rating: 5
    },
    {
      name: "Prof. Rodrigo", 
      role: "Ensino Médio",
      image: teacherRodrigo,
      text: "A linguagem dos documentos é ótima e pronta pra entregar na coordenação. Meus colegas sempre perguntam como faço tudo tão rápido!",
      rating: 5
    },
    {
      name: "Prof. Ana Maria",
      role: "Ensino Fundamental I",
      image: teacherCarla, // Using same image for now
      text: "Descobri a Aulix e virou minha assistente pessoal. Os relatórios ficam perfeitos e eu tenho mais tempo para os alunos.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            O que dizem os professores que{" "}
            <span className="text-primary">já usam a Aulix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 2.000 educadores já economizam horas toda semana com a Aulix
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-background hover:shadow-card transition-all duration-300 border-0 shadow-soft animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg leading-relaxed mb-6 text-foreground">
                  "{testimonial.text}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-background rounded-lg px-6 py-4 shadow-soft">
            <div className="flex -space-x-2">
              <img src={teacherCarla} alt="Professor" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
              <img src={teacherRodrigo} alt="Professor" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
              <img src={teacherCarla} alt="Professor" className="w-10 h-10 rounded-full border-2 border-background object-cover" />
              <div className="w-10 h-10 rounded-full border-2 border-background bg-primary text-white text-sm font-bold flex items-center justify-center">
                +2K
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Mais de 2.000 professores</div>
              <div className="text-sm text-muted-foreground">já confiam na Aulix</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};