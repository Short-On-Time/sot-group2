import React, { useState } from 'react'
import ImageMapper from 'react-image-mapper'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import jwt from 'jsonwebtoken'

const Model2D = () => {
	const [hoveredArea, setHoveredArea] = useState(null)

	const isAdmin = () => {
		const token = localStorage.getItem('user-token')

		if (token) {
			jwt.verify(token, 'herbs', (_e, decoded) => {
				return decoded.user_info.is_admin
			});
		} else {
			return false
		}
	}

	const isPremium = () => {
		const token = localStorage.getItem('user-token')

		if (token) {
			jwt.verify(token, 'herbs', (_e, decoded) => {
				return decoded.user_info.is_premium
			});
		} else {
			return false
		}
	}

	return (
		<Container fluid>
			<Row>
				<Col>
					<ImageMapper
						src={'front.jpg'}
						map={{
							name: 'front',
							areas: [
								{
									name: 'eye-l',
									shape: 'poly',
									coords: [318, 196, 307, 188, 301, 185, 291, 186, 281, 193, 295, 200, 303, 200],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'eye-r',
									shape: 'poly',
									coords: [347, 195, 356, 187, 367, 185, 383, 193, 370, 200, 360, 201, 351, 198],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'neck',
									shape: 'poly',
									coords: [269, 358, 297, 367, 317, 377, 326, 387, 346, 385, 346, 380, 357, 371, 373, 364, 396, 358, 393, 353, 402, 350, 400, 344, 385, 336, 374, 295, 374, 289, 360, 300, 348, 307, 322, 309, 303, 301, 292, 289, 289, 289, 287, 317, 281, 340, 277, 354, 272, 357],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'head',
									shape: 'poly',
									coords: [260, 372, 241, 370, 229, 359, 225, 353, 226, 339, 212, 331, 210, 318, 217, 314, 197, 291, 194, 277, 195, 266, 199, 252, 188, 234, 190, 222, 201, 212, 195, 196, 194, 177, 199, 166, 205, 162, 210, 143, 227, 103, 243, 81, 257, 71, 271, 60, 281, 52, 297, 43, 327, 37, 346, 37, 386, 49, 410, 68, 433, 97, 444, 118, 448, 120, 459, 145, 459, 165, 472, 190, 470, 203, 465, 211, 468, 236, 471, 245, 469, 256, 459, 268, 457, 282, 462, 293, 464, 311, 460, 321, 440, 342, 434, 351, 434, 357, 431, 358, 429, 351, 425, 353, 424, 358, 415, 365, 404, 365, 393, 353, 402, 350, 401, 344, 394, 341, 384, 334, 375, 300, 374, 288, 358, 301, 345, 308, 321, 309, 303, 300, 291, 288, 289, 289, 287, 309, 286, 324, 278, 351, 270, 358, 255, 366],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'arm-l',
									shape: 'poly',
									coords: [194, 370, 163, 376, 138, 391, 127, 408, 113, 467, 113, 506, 111, 580, 106, 650, 95, 712, 92, 735, 87, 865, 86, 949, 124, 947, 143, 856, 162, 749, 173, 672, 182, 578, 189, 549, 187, 531, 191, 509, 210, 469, 207, 408, 197, 374, 196, 374],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'arm-r',
									shape: 'poly',
									coords: [471, 370, 497, 375, 518, 383, 532, 396, 540, 412, 551, 462, 554, 492, 553, 516, 557, 632, 565, 678, 573, 730, 579, 842, 579, 944, 541, 946, 515, 807, 498, 710, 479, 563, 477, 550, 480, 528, 476, 511, 454, 467, 458, 405, 469, 372],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'stomach',
									shape: 'poly',
									coords: [279, 719, 283, 686, 299, 653, 323, 642, 344, 642, 356, 646, 368, 655, 377, 668, 384, 707, 385, 725, 380, 795, 364, 819, 351, 832, 331, 838, 310, 829, 286, 806, 282, 786],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'knee-l',
									shape: 'poly',
									coords: [320, 1394, 224, 1397, 227, 1372, 230, 1331, 230, 1302, 226, 1280, 324, 1275, 323, 1301, 317, 1338, 315, 1355, 321, 1384, 324, 1394],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'knee-r',
									shape: 'poly',
									coords: [340, 1275, 441, 1274, 434, 1313, 437, 1349, 445, 1396, 342, 1396, 349, 1361, 351, 1345, 345, 1320, 341, 1293],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'foot-l',
									shape: 'poly',
									coords: [255, 1654, 311, 1652, 316, 1667, 314, 1687, 314, 1731, 326, 1764, 326, 1784, 328, 1804, 323, 1816, 316, 1821, 303, 1822, 295, 1819, 294, 1816, 287, 1822, 273, 1821, 273, 1816, 265, 1819, 258, 1818, 254, 1811, 248, 1814, 245, 1812, 243, 1809, 241, 1806, 241, 1804, 241, 1800, 236, 1802, 231, 1802, 230, 1799, 230, 1790, 233, 1779, 237, 1764, 243, 1757, 254, 1707, 254, 1701, 252, 1693, 251, 1684, 254, 1668, 255, 1654, 256, 1654],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'foot-r',
									shape: 'poly',
									coords: [353, 1652, 409, 1652, 409, 1675, 414, 1682, 409, 1704, 418, 1742, 433, 1777, 436, 1785, 434, 1802, 426, 1802, 423, 1808, 421, 1811, 416, 1814, 409, 1811, 407, 1817, 400, 1819, 393, 1817, 391, 1820, 386, 1823, 376, 1821, 371, 1816, 363, 1821, 353, 1822, 345, 1819, 339, 1817, 336, 1805, 338, 1794, 339, 1777, 338, 1762, 349, 1736, 350, 1687, 347, 1672, 350, 1658, 352, 1653],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'leg-l',
									shape: 'poly',
									coords: [168, 843, 227, 893, 288, 955, 317, 976, 322, 1029, 325, 1134, 325, 1251, 325, 1294, 315, 1356, 327, 1404, 325, 1523, 311, 1648, 319, 1681, 313, 1684, 319, 1740, 326, 1770, 327, 1802, 327, 1815, 298, 1822, 295, 1814, 289, 1820, 283, 1820, 271, 1814, 261, 1818, 257, 1810, 258, 1808, 251, 1811, 245, 1811, 242, 1803, 246, 1790, 238, 1802, 233, 1798, 233, 1790, 236, 1776, 243, 1761, 255, 1703, 252, 1695, 253, 1681, 258, 1660, 255, 1643, 243, 1577, 235, 1556, 228, 1529, 223, 1421, 223, 1387, 232, 1337, 231, 1288, 211, 1213, 162, 1024, 148, 940, 160, 853, 167, 843],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'leg-r',
									shape: 'poly',
									coords: [341, 1817, 338, 1804, 339, 1782, 339, 1765, 347, 1736, 350, 1686, 348, 1667, 355, 1649, 341, 1515, 340, 1431, 347, 1370, 349, 1346, 341, 1292, 340, 1097, 342, 1034, 349, 990, 347, 981, 402, 932, 417, 915, 497, 844, 500, 843, 510, 885, 514, 908, 515, 956, 512, 985, 508, 1012, 484, 1111, 461, 1194, 444, 1250, 434, 1316, 435, 1345, 439, 1362, 444, 1399, 444, 1455, 439, 1514, 431, 1560, 418, 1603, 409, 1646, 409, 1672, 413, 1684, 412, 1698, 409, 1703, 417, 1741, 429, 1768, 435, 1787, 433, 1802, 430, 1802, 426, 1799, 423, 1810, 419, 1814, 411, 1813, 409, 1812, 408, 1815, 407, 1817, 404, 1819, 400, 1819, 396, 1819, 394, 1816, 392, 1820, 388, 1822, 382, 1822, 377, 1821, 373, 1818, 371, 1815, 366, 1819, 359, 1821, 345, 1818],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								}

								// add acne and ears (likely floating to the side)
							]
						}
						}
						width={448 * 660 / 1854}
						imgWidth={660}
						onClick={area => {
							!!isPremium() || !!isAdmin()
								? document.location = `/remedies?body_part=${area.name.endsWith('-l') || area.name.endsWith('-r') ? area.name.substr(0, area.name.length - 2) : area.name}`
								: document.location = `/remedies?body_part=${area.name.endsWith('-l') || area.name.endsWith('-r') ? area.name.substr(0, area.name.length - 2) : area.name}&ailment_type=&free_only=on`
						}}
						onMouseEnter={area => setHoveredArea(area)}
						onMouseLeave={() => setHoveredArea(null)}
					/>
				</Col>

				<Col>
					<ImageMapper
						src={'side.jpg'}
						map={{
							name: 'side',
							areas: [
								{
									name: 'lips',
									shape: 'poly',
									coords: [187, 256, 177, 252, 165, 245, 163, 246, 163, 249, 167, 255, 165, 260, 165, 264, 166, 266, 176, 263, 183, 259, 184, 259, 185, 257],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'mouth',
									shape: 'poly',
									coords: [169, 241, 277, 245, 280, 294, 210, 299, 180, 302, 173, 298, 169, 290, 171, 279, 171, 270, 168, 264, 164, 263, 165, 258, 167, 255, 163, 247, 167, 241],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'throat',
									shape: 'poly',
									coords: [211, 298, 335, 297, 326, 371, 234, 373, 236, 364, 233, 350, 229, 327, 219, 306, 215, 302],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'chest',
									shape: 'poly',
									coords: [215, 407, 206, 423, 195, 435, 181, 455, 155, 499, 145, 517, 134, 538, 137, 545, 144, 569, 160, 586, 177, 594, 190, 595, 210, 592, 223, 585, 233, 572, 235, 567, 237, 424],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'wrist',
									shape: 'poly',
									coords: [260, 900, 309, 908, 294, 947, 292, 969, 249, 964, 255, 947, 257, 938],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'finger',
									shape: 'poly',
									coords: [243, 1032, 254, 1033, 254, 1056, 252, 1069, 251, 1080, 248, 1086, 243, 1086, 241, 1077, 241, 1039, 242, 1033],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'hand',
									shape: 'poly',
									coords: [248, 964, 292, 969, 291, 1015, 289, 1024, 287, 1038, 286, 1047, 283, 1055, 277, 1059, 275, 1058, 272, 1064, 267, 1069, 266, 1071, 265, 1071, 262, 1075, 263, 1076, 261, 1078, 259, 1079, 256, 1080, 255, 1080, 253, 1079, 254, 1075, 255, 1072, 255, 1069, 256, 1061, 256, 1039, 254, 1038, 253, 1039, 254, 1063, 252, 1069, 253, 1075, 251, 1080, 249, 1085, 243, 1086, 243, 1082, 241, 1080, 241, 1075, 241, 1040, 236, 1048, 230, 1050, 230, 1045, 231, 1038, 231, 1025, 233, 1000, 243, 977, 243, 976],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},

								{
									name: 'leg',
									shape: 'poly',
									coords: [197, 900, 222, 879, 242, 865, 266, 855, 292, 853, 327, 861, 364, 883, 389, 907, 378, 944, 356, 985, 353, 996, 340, 1194, 333, 1267, 332, 1295, 337, 1352, 362, 1451, 363, 1509, 355, 1580, 345, 1644, 338, 1712, 338, 1728, 345, 1752, 344, 1776, 335, 1784, 300, 1784, 290, 1781, 248, 1782, 223, 1785, 191, 1789, 173, 1787, 167, 1789, 158, 1790, 157, 1788, 149, 1788, 146, 1785, 137, 1787, 136, 1785, 127, 1786, 119, 1780, 114, 1769, 117, 1762, 116, 1766, 146, 1764, 198, 1746, 229, 1733, 237, 1726, 247, 1723, 260, 1697, 263, 1616, 250, 1452, 248, 1415, 230, 1328, 220, 1295, 207, 1130, 195, 1046, 193, 971],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								},
							]
						}}
						width={448 * 512 / 1856}
						imgWidth={512}
						onClick={area => {
							!!isPremium() || !!isAdmin()
								? document.location = `/remedies?body_part=${area.name.endsWith('-l') || area.name.endsWith('-r') ? area.name.substr(0, area.name.length - 2) : area.name}`
								: document.location = `/remedies?body_part=${area.name.endsWith('-l') || area.name.endsWith('-r') ? area.name.substr(0, area.name.length - 2) : area.name}&ailment_type=&free_only=on`
						}}
						onMouseEnter={(area) => setHoveredArea(area)}
						onMouseLeave={() => setHoveredArea(null)}
					/>
				</Col>

				<Col>
					<ImageMapper
						src={'back.jpg'}
						map={{
							name: 'back',
							areas: [
								{
									name: 'back',
									shape: 'poly',
									coords: [169, 597, 187, 607, 204, 611, 249, 615, 317, 616, 377, 613, 411, 609, 438, 598, 431, 621, 416, 667, 412, 690, 412, 717, 425, 751, 447, 795, 459, 821, 453, 828, 412, 843, 359, 851, 299, 853, 244, 851, 197, 841, 157, 829, 148, 823, 170, 771, 182, 751, 193, 724, 195, 683],
									preFillColor: 'rgba(255, 255, 255, 0.15)',
									fillColor: 'rgba(255, 255, 255, 0.3)'
								}
							]
						}}
						width={448 * 596 / 1824}
						imgWidth={596}
						onClick={area => {
							!!isPremium() || !!isAdmin()
								? document.location = `/remedies?body_part=${area.name.endsWith('-l') || area.name.endsWith('-r') ? area.name.substr(0, area.name.length - 2) : area.name}`
								: document.location = `/remedies?body_part=${area.name.endsWith('-l') || area.name.endsWith('-r') ? area.name.substr(0, area.name.length - 2) : area.name}&ailment_type=&free_only=on`
						}}
						onMouseEnter={(area) => setHoveredArea(area)}
						onMouseLeave={() => setHoveredArea(null)}
					/>
				</Col>
			</Row>

			<Row>
				<Col>
					{
						hoveredArea &&
						<span style={{
							position: 'absolute',
							color: '#fff',
							padding: '10px',
							background: 'rgba(0, 0, 0, 0.8)',
							transform: 'translate3d(-50%, -50%, 0)',
							borderRadius: '5px',
							top: '50px'
						}}
						>
							{
								hoveredArea.name.endsWith('-l') || hoveredArea.name.endsWith('-r')
									? hoveredArea.name.substr(0, hoveredArea.name.length - 2)
									: hoveredArea.name
							}
						</span>
					}
				</Col>
			</Row>
		</Container>
	)
}

export default Model2D
