import React from "react";
import Gallery from "../../../components/Gallery";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SSD() {

    const images = [
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2603.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2617.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2575.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1295.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1294.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2548.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2560.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2574.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2616.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2602.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2614.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1309.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2600.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2628.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2589.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2562.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2576.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1296.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1297.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2577.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2588.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2629.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2601.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1308.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2615.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2611.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2605.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2598.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2573.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1293.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1292.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2572.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2599.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2604.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2610.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2638.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2606.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2612.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2558.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2564.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1290.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1291.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2565.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2559.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2613.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2607.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2660.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2648.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_4359.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2728.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_4358.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2701.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2715.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_4364.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2649.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2675.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2661.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2688.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2677.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2663.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_4373.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2662.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2676.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2689.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2672.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2666.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2706.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2707.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2673.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2659.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2665.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_4360.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2704.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_4361.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2664.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2658.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2682.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2641.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2655.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2669.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2721.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2720.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2668.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2654.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2640.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2681.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2656.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2642.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2722.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2643.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2657.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2680.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2694.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2690.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2684.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2653.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2647.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2727.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2726.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2646.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2652.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2685.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2691.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2687.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2678.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2644.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2650.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2718.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_4368.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2651.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2645.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2679.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2692.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2686.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2622.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2636.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1317.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1303.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2597.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2583.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2554.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1288.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1289.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2541.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2555.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2596.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1302.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2623.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2621.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2609.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1300.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1314.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2594.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2543.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2557.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2556.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2542.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2595.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1301.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2608.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2620.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1305.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1311.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2618.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2630.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2624.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2591.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2552.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2553.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2547.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2625.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2631.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2619.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1310.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1304.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1312.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1306.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2627.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2586.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2579.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2545.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1299.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1298.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2544.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2550.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2578.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2593.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2632.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_2626.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1307.JPG'},
        {original: 'https://aaany-assets.s3.amazonaws.com/2023/Mushairah/IMG_1313.JPG'}
    ]

    return (
        <Container>
            <Navigation />
            <div style = {{textAlign: "center"}}>
                <Gallery images = {images} title = "AAANY Sir Syed Day 2023 Gallery" year = "2023"></Gallery>
                <br />
                <h1>AAANY Sir Syed Day Mushaira 2023 Videos</h1>
                <br />
                <h3>Speeches and Awards</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/LVC9nlde-cQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Mushaira</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/TfoBoE1hPlE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Mushaira (short)</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/XEEMxjhj3aM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Anubhav Sinha Speech</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/VELN2OKMPyg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Anubhav Sinha Interview</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/pJbSPjVFLQI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>AMU Tarana</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/Zzvj5uinxXk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Mushaira Interviews</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/7kSP8O6Ih1Q" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>Urdu News</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/HdCD0UIpYXo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <h3>AMU Tarana</h3>
                <div style = {{textAlign: "center"}}><iframe src="https://www.youtube.com/embed/fr9fX3lBKv4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style = {{width: "600px", height: "400px"}}></iframe></div>
                <br />
                <Gallery images = {images} title = "AAANY Sir Syed Day Mushaira 2023" year = "2023"></Gallery>
            </div>
            <Footer />
        </Container>
    )
}