import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image,
    Font,
    View,
} from '@react-pdf/renderer'
import ConstanciaIMG from '../../../public/img/PlantillaConstancia.jpg'

// Define tus estilos
const styles = StyleSheet.create({
    page: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
    Imagen: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '0',
        margin: '0',
        zIndex: -1, // Colocar la imagen de fondo detrás del texto
    },
    name: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '50%',
        marginLeft: '20%',
        color: '#003B5C',
        padding: '10',
    },
    text: {
        fontSize: 12,
        width: '50%',
        textAlign: 'center',
        marginLeft: '20%',
        marginBottom: '8%',
        color: '#003B5C',
        padding: '10',
    }

});

export default function PDFConstancia({ constancia }) {
    return (

        <Document>
            <Page size={{ width: 842, height: 595 }} style={styles.page}>
                <Text style={styles.name}>A: {constancia.name}</Text>
                <Text style={styles.text}>Por su valiosa participación {constancia.contenido_1} {constancia.contenido_constancia}</Text>
                <Image style={styles.Imagen} src={ConstanciaIMG} />
            </Page>
        </Document>

    );
}