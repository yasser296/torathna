
import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import FeatureSection from '@/components/FeatureSection';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

// Mock quiz data
const quizQuestions = [
  {
    question: "Quelle ville est connue comme la 'ville rouge' du Maroc ?",
    options: ["Casablanca", "Fès", "Marrakech", "Rabat"],
    correctAnswer: "Marrakech"
  },
  {
    question: "Quel est l'instrument de musique principal utilisé dans la musique Gnaoua ?",
    options: ["Oud", "Guembri", "Violon", "Tambour"],
    correctAnswer: "Guembri"
  },
  {
    question: "Quelle épice donne sa couleur jaune au couscous marocain ?",
    options: ["Paprika", "Cumin", "Safran", "Curcuma"],
    correctAnswer: "Curcuma"
  },
  {
    question: "Quelle est la boisson nationale du Maroc ?",
    options: ["Café", "Thé à la menthe", "Jus d'orange", "Limonade"],
    correctAnswer: "Thé à la menthe"
  },
  {
    question: "Quel art décoratif consiste à assembler des petits morceaux de céramique colorée ?",
    options: ["Zellige", "Tadellakt", "Tadelakt", "Khayamiya"],
    correctAnswer: "Zellige"
  }
];

const QuizJeux = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsCorrect(option === quizQuestions[currentQuestion].correctAnswer);
    
    if (option === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResults(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };
  
  return (
    <Layout>
      <HeroBanner 
        title="Quiz & Jeux"
        subtitle="Testez vos connaissances sur le patrimoine culturel marocain"
        imageSrc="https://images.unsplash.com/photo-1560173045-beaf11c65dce?q=80&w=2070&auto=format&fit=crop"
      />
      
      <FeatureSection
        title="Quiz Culturel"
        subtitle="Mettez à l'épreuve vos connaissances sur le Maroc"
      >
        <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-md p-8 border">
          {showResults ? (
            <div className="text-center">
              <h3 className="text-2xl mb-4">Résultats du Quiz</h3>
              <div className="text-5xl font-bold mb-6">{score}/{quizQuestions.length}</div>
              <p className="mb-6 text-muted-foreground">
                {score === quizQuestions.length 
                  ? "Parfait ! Vous êtes un véritable expert de la culture marocaine !" 
                  : score >= quizQuestions.length / 2 
                    ? "Bien joué ! Vous connaissez bien le Maroc et ses traditions." 
                    : "Continuez à explorer l'application pour en apprendre davantage sur le Maroc !"}
              </p>
              <Button onClick={restartQuiz}>Recommencer le Quiz</Button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between mb-6">
                <span className="text-sm text-muted-foreground">Question {currentQuestion + 1}/{quizQuestions.length}</span>
                <span className="text-sm text-muted-foreground">Score: {score}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl mb-6">{quizQuestions[currentQuestion].question}</h3>
              
              <div className="space-y-3 mb-6">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedOption === option
                        ? option === quizQuestions[currentQuestion].correctAnswer
                          ? 'bg-green-100 border-green-500 dark:bg-green-900 dark:border-green-700'
                          : 'bg-red-100 border-red-500 dark:bg-red-900 dark:border-red-700'
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => handleOptionSelect(option)}
                    disabled={selectedOption !== null}
                  >
                    <div className="flex justify-between items-center">
                      <span>{option}</span>
                      {selectedOption === option && (
                        isCorrect ? <Check className="text-green-500" /> : <X className="text-red-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              {selectedOption && (
                <div className={`p-4 rounded-lg mb-6 ${
                  isCorrect ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
                }`}>
                  <p className="font-medium">
                    {isCorrect 
                      ? 'Correct !' 
                      : `Incorrect. La bonne réponse est: ${quizQuestions[currentQuestion].correctAnswer}`}
                  </p>
                </div>
              )}
              
              <Button 
                onClick={handleNextQuestion} 
                disabled={selectedOption === null}
                className="w-full"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Question Suivante' : 'Voir Résultats'}
              </Button>
            </div>
          )}
        </div>
      </FeatureSection>
      
      <FeatureSection
        title="Mini-Jeux Éducatifs"
        subtitle="Apprenez tout en vous amusant avec nos jeux interactifs"
        className="bg-muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-moroccan">
            <h3 className="text-xl mb-3">Les Régions du Maroc</h3>
            <div className="bg-muted rounded-lg h-40 flex items-center justify-center mb-4">
              <span className="text-muted-foreground">Carte Interactive</span>
            </div>
            <p className="text-muted-foreground mb-4">Placez correctement les 12 régions du Maroc sur la carte.</p>
            <Button variant="outline" className="w-full">Bientôt disponible</Button>
          </div>
          
          <div className="card-moroccan">
            <h3 className="text-xl mb-3">Instruments de Musique</h3>
            <div className="bg-muted rounded-lg h-40 flex items-center justify-center mb-4">
              <span className="text-muted-foreground">Jeu d'Écoute</span>
            </div>
            <p className="text-muted-foreground mb-4">Écoutez et identifiez les instruments traditionnels marocains.</p>
            <Button variant="outline" className="w-full">Bientôt disponible</Button>
          </div>
          
          <div className="card-moroccan">
            <h3 className="text-xl mb-3">Mémoire des Motifs</h3>
            <div className="bg-muted rounded-lg h-40 flex items-center justify-center mb-4">
              <span className="text-muted-foreground">Jeu de Mémoire</span>
            </div>
            <p className="text-muted-foreground mb-4">Associez les paires de motifs traditionnels marocains.</p>
            <Button variant="outline" className="w-full">Bientôt disponible</Button>
          </div>
        </div>
      </FeatureSection>
    </Layout>
  );
};

export default QuizJeux;
