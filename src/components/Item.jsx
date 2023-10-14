import Card from './shared/Card';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function Item({ task }) {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	});

	return (
		<div ref={ref}>
			<motion.div
				key={task.id}
				variants={{
					hidden: { opacity: 0, x: 75 },
					visible: { opacity: 1, x: 0 },
				}}
				initial='hidden'
				animate={mainControls}
				transition={{ duration: 0.25, delay: 0.25 }}
			>
				<Card>
					<div className='closeBtnDiv flex'>
						<button className='close'>
							<FaTimes color='purple' />
						</button>
					</div>
					<p className='desc-display'>{task.description}</p>
					<p className='date-display'>
						Created on: <span className='bold'>{task.dateCreated}</span>
					</p>
				</Card>
			</motion.div>
		</div>
	);
}
