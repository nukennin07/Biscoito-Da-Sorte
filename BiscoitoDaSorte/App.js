import React, { Component } from "react";
import{View, Text, Button, StyleSheet, VirtualizedList, TextInput, Image, TouchableOpacity} from 'react-native'


class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            textoFrase: '',
            img: require('./src/biscoito.png'),
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this)

        this.frases = [
            "A persistência é a chave para o sucesso.",
            "Grandes oportunidades estão à sua frente.",
            "Acredite em si mesmo e os outros também acreditarão.",
            "A sorte favorece os ousados.",
            "A paciência é a virtude dos sábios.",
            "A vida é uma aventura, ouse vivê-la.",
            "Seja grato pelo que você tem.",
            "O amor é o maior tesouro.",
            "Seja a mudança que você deseja ver no mundo.",
            "O sucesso começa com um sonho.",
            "Siga seu coração, ele conhece o caminho.",
            "A simplicidade é a chave da felicidade.",
            "Aprenda com os erros do passado para construir um futuro melhor.",
            "A criatividade é a inteligência se divertindo.",
            "O otimismo é a fé que leva à realização.",
            "A sorte está sempre do lado daqueles que trabalham duro.",
            "O sorriso é o idioma universal da bondade.",
            "A sabedoria começa na reflexão.",
            "A vida é cheia de surpresas, aproveite cada uma delas.",
            "A cada dia, uma nova oportunidade se apresenta.",
            "A humildade é a base de toda virtude.",
            "A verdadeira riqueza está na bondade do coração.",
            "O respeito é a chave para relacionamentos saudáveis.",
            "A gratidão é a chave para a felicidade.",
            "Aprenda com o passado, viva o presente, sonhe com o futuro.",
            "A vida é uma jornada, não um destino.",
            "Acreditar em si mesmo é o primeiro passo para o sucesso.",
            "A paciência é a virtude dos sábios.",
            "A gentileza é uma linguagem que o surdo pode ouvir e o cego pode ver.",
            "O sucesso é a soma de pequenos esforços repetidos diariamente.",
            "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
            "A maior glória em viver não está em nunca cair, mas em se levantar a cada queda.",
            "O amor é a força mais poderosa do mundo.",
            "A coragem não é a ausência de medo, mas a capacidade de enfrentá-lo.",
            "A verdadeira felicidade está nas coisas simples da vida.",
            "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
            "A vida é um presente, e o presente é um dom.",
            "A persistência é o caminho do êxito.",
            "Sorria, a vida é curta demais para ser levada a sério.",
            "O primeiro passo para o sucesso é acreditar que é possível.",
            "A mente é tudo. O que você pensa, você se torna.",
            "A cada novo dia, um novo começo.",
            "A vida é um eco, o que você envia, volta para você.",
            "A melhor maneira de prever o futuro é criá-lo.",
            "A única maneira de fazer um grande trabalho é amar o que você faz.",
            "O único limite é aquele que você impõe a si mesmo.",
            "A vida é feita de escolhas. Escolha ser feliz.",
            "A felicidade não é algo feito. Vem das suas próprias ações.",
            "O segredo para ficar à frente é começar.",
            "Seja a mudança que você quer ver no mundo.",
            "O maior erro que você pode cometer é o medo de cometer erros.",
            "Não espere, a vida não é esperar.",
            "A vida é uma aventura ousada ou nada.",
            "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
            "Onde quer que você vá, vá com todo o seu coração.",
            "Acredite que você pode e você está no meio do caminho.",
            "Só você pode controlar seu futuro.",
            "Acreditar é o primeiro passo para o sucesso.",
            "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
            "Tudo o que você pode imaginar é real.",
            "Faça a vida valer a pena.",
            "A vida é feita de desafios, mas vale a pena enfrentá-los.",
            "Acredite no impossível.",
            "A sorte é o que acontece quando a preparação encontra a oportunidade.",
            "O sucesso é uma jornada, não um destino.",
            "A mente é como um paraquedas, só funciona quando está aberta.",
            "A beleza está nos olhos de quem vê.",
            "O verdadeiro poder está em ser gentil.",
            "Acredite nos seus sonhos e eles se tornarão realidade.",
            "Cada dia é uma nova oportunidade de ser melhor.",
            "O amor é a resposta, não importa a pergunta.",
            "A simplicidade é a última sofisticação.",
            "A vida é um presente precioso, aproveite cada momento.",
            "A coragem é a resistência ao medo, domínio do medo, não a ausência do medo.",
            "Toda tempestade corre fora de chuva.",
            "O sucesso não é a chave da felicidade. A felicidade é a chave para o sucesso.",
            "A sabedoria começa com o silêncio.",
            "Siga seu coração, ele conhece o caminho.",
            "A vida é uma viagem, não um destino.",
            "A esperança é o sonho acordado.",
            "O amor não conhece limites.",
            "O sorriso é o espelho da alma.",
            "Nunca é tarde demais para ser o que você poderia ter sido.",
            "O que a mente pode conceber, pode ser alcançado.",
            "O segredo da felicidade é a liberdade, o segredo da liberdade é a coragem.",
            "A vida é curta, aproveite cada momento.",
            "A confiança em si mesmo é o primeiro segredo do sucesso.",
            "A vida é o que acontece quando você está ocupado fazendo outros planos.",
            "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
            "A simplicidade é a chave para a verdadeira elegância.",
            "A vida é um eco. O que você envia, volta para você.",
            "Se você quer ser feliz, seja.",
            "O otimismo é a fé que leva à realização.",
            "Acredite em si mesmo e tudo é possível.",
            "A verdadeira riqueza é a riqueza da alma.",
            "A paciência é amarga, mas seu fruto é doce.",
            "A humildade é o primeiro degrau da sabedoria.",
            "A força não vem da capacidade física, mas da vontade indomável.",
            "A bondade é uma linguagem que o surdo pode ouvir e o cego pode ver.",
            "O sucesso é o resultado de pequenos esforços repetidos dia após dia.",
            "A beleza começa no momento em que você decide ser você mesmo.",
            "A única maneira de fazer um excelente trabalho é amar o que você faz.",
            "A vida é uma viagem que deve ser viajada sem medo."
          ];
          
          
    }

    quebraBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

        this.setState({
            textoFrase: '"' + this.frases[numeroAleatorio] + '"',
            img: require('./src/biscoitoAberto.png'),
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Image
                    source={this.state.img}
                    style={styles.img}
                />
                <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
                <TouchableOpacity style={styles.botão} onPress={this.quebraBiscoito}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        alignItems: "center",
        justifyContent: "center"
    },
    img:{
        width: 250,
        height:250,
    },
    textoFrase:{
        fontSize: 20,
        color: '#dd7b22',
        margin: 30,
        fontStyle: "italic",
        textAlign: "center"
    },
    botão:{
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25

    },
    btnArea:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center",
    },
    btnTexto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b22',
    },
})


export default App;
