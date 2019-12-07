import React, { Component } from "react";
import { Carousel } from "react-bootstrap"

class Gallery2019 extends Component {
   
  render() {

    const images = [
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_0_0.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_100_100.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_101_101.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_102_102.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_103_103.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_104_104.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_105_105.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_106_106.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_107_107.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_108_108.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_10_10.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_11_11.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_12_12.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_139_139.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_13_13.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_140_140.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_141_141.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_142_142.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_143_143.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_144_144.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_145_145.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_146_146.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_147_147.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_148_148.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_149_149.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_14_14 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_150_150.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_151_151.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_152_152.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_153_153.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_154_154.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_155_155.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_156_156.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_157_157.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_158_158.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_15_15 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_160_160.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_161_161.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_162_162.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_163_163.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_165_165.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_166_166.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_167_167.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_168_168.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_169_169.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_16_16 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_170_170.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_171_171.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_172_172.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_173_173 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_173_173.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_174_174 - Copy (2).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_174_174 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_174_174.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_175_175 - Copy (2).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_175_175 - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_176_176 - Copy (2).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_176_176 - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_17_17 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_18_18 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_19_19 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_1_1.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_20_20 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_21_21 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_22_22 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_23_23 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_24_24 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_25_25 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_26_26 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_28_28 - Copy (2).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_28_28 - Copy - Copy (2).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_28_28 - Copy - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_28_28 - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_28_28 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_28_28.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy (2) - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy (2) - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy (2).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy (3) - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy (3).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy - Copy (2) - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy - Copy (2).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy - Copy (3).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy - Copy - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_29_29.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_2_2.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30 - Copy (2) - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30 - Copy (2) - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30 - Copy (2).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30 - Copy (3) - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30 - Copy (3).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30 - Copy (4).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30 - Copy - Copy - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30 - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_30_30.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_31_31 - Copy (2).jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_31_31 - Copy - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_31_31 - Copy - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_31_31 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_31_31.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_32_32 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_32_32.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_33_33 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_33_33.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_34_34 - Copy.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_34_34.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_35_35.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_36_36.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_37_37.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_38_38.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_39_39.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_3_3.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_40_40.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_41_41.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_42_42.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_43_43.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_44_44.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_45_45.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_46_46.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_47_47.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_48_48.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_49_49.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_4_4.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_50_50.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_51_51.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_52_52.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_53_53.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_54_54.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_5_5.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_6_6.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_79_79.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_7_7.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_80_80.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_81_81.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_82_82.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_83_83.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_84_84.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_85_85.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_86_86.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_87_87.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_88_88.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_89_89.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_8_8.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_90_90.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_91_91.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_92_92.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_93_93.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_94_94.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_95_95.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_96_96.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_97_97.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_98_98.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_99_99.jpg' },
      { original: 'https://s3.amazonaws.com/aaany-assets/images/2017/23396734070_commerceproduct_7182_9_9.jpg' },
      ]

    return (
      <React.Fragment>
        <h1>Sir Syed Day Mushaira 2019</h1>
        <br></br>
        <div style = {{textAlign: "center"}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLhk73sqjPfvULu_XFonoQvHC0pJKHx0sa" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </React.Fragment>
    );
  }

}

export default Gallery2019;

/*<Carousel style = {{backgroundColor: "#484848"}}>
        {
          images.map(function(image) {
          return (<Carousel.Item style = {{textAlign: "center"}}>
            <img src = {image.original} alt = "image" height = "500px"/>
          </Carousel.Item>
          )})
        }
        </Carousel> */