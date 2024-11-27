import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image
} from '@react-pdf/renderer'

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
        top: '0',
        left: '0',
        zIndex: -1, // Colocar la imagen de fondo detrás del texto
    },
});
//Recibe como parametro la ruta de la imagen
export default function PlantillaConstancia({ ConstanciaIMG, customStyles }) {
    const imagenValida = ConstanciaIMG?.startsWith('data:image') ? ConstanciaIMG : null;
    return (
        <Document>
            <Page size={{ width: 842, height: 595 }} style={styles.page}>
                {imagenValida ? (
                    <Image style={styles.Imagen} src={imagenValida} />
                ) : (
                    <Text style={{ color: 'red' }}>Error al cargar la imagen</Text>
                )}
                <Text style={{ ...customStyles.name }}>A: Eduardo Barriguete Palomino</Text>

                <Text style={{
                    ...customStyles.text,
                    width: 421,
                    wordBreak: 'break-word',
                    textAlign: 'justify'
                }} >Por su valiosa participación en el Desarrollo del Software "Desacargas de ConstanciasBuap"</Text>
            </Page>
        </Document>
    );
}