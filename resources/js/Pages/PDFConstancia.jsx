import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image,
} from '@react-pdf/renderer'
import ConstanciaIMG from '../../../public/img/PlantillaConstancia.jpg'

// Define tus estilos


export default function PDFConstancia({ constancia, plantilla }) {
    const plantillaData = plantilla || {};

    // Accediendo a las propiedades dentro de plantillaData
    const fontSizeNombre = plantillaData.font_size_nombre || 22;
    const longitudNombre = plantillaData.longitud_nombre || 100;
    const latitudNombre = plantillaData.latitud_nombre || 100;
    const colorNombre = plantillaData.text_color_nombre || '#003B5C';

    const fontSizeTexto = plantillaData.font_size_texto || 12;
    const longitudTexto = plantillaData.longitud_texto || 100;
    const latitudTexto = plantillaData.latitud_texto || 100;
    const colorTexto = plantillaData.text_color_texto || '#003B5C';

    const styles = StyleSheet.create({
        Imagen: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            padding: '0',
            margin: '0',
            top: '0',
            left: '0',
            zIndex: -1, // Colocar la imagen de fondo detrás del texto
        },
        page: {
            position: 'relative',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
        },
        name: {
            fontSize: fontSizeNombre || 28,
            color: colorNombre || '#003B5C',
            position: 'absolute',
            left: longitudNombre || 100,
            top: latitudNombre || 100,
        },
        text: {
            fontSize: 12,
            color: colorTexto || '#003B5C',
            position: 'absolute',
            left: longitudTexto || 100,
            top: latitudTexto || 100,
            width: 421,
        },
        /*
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
       }*/
    })
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