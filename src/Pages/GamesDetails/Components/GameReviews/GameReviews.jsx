import Title from "../../../../Components/Shared/AnimatedTitle/Titile";

const GameReviews = ({ gameDetails }) => {
	const { reviews } = gameDetails;
	if (!gameDetails || !gameDetails.reviews) {
		return <div>Loading or error message...</div>;
	}
	return (
		<div>
			<h2 className="text-3xl text-center font-bold py-5">Reviews</h2>
			<div className="flex max-w-4xl gap-4 mx-auto">
				{reviews.map((review, index) => (
					<div
						key={index}
						className="border text-white rounded-lg shadow-lg p-6"
					>
						<div className="flex items-center mb-4">
							<img
								className="w-12 h-12 rounded-full mr-4"
								src="https://themepixer.com/demo/html/geco/Geco/img/bg/cta_bg.jpg"
								alt={`${review.username} Avatar`}
							/>
							<div>
								<h3 className="text-lg font-semibold">
									{review.username}
								</h3>
								<p className="text-sm">User</p>
							</div>
						</div>
						<p className="text-lg mb-6">"{review.reviewText}"</p>
						<div className="flex justify-between">
							<div className="flex items-center">
								<svg
									className="w-6 h-6 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.172 8.172a1 1 0 111.415-1.415L10 8.586l.414-.413a1 1 0 111.415 1.415L11.414 10l.413.414a1 1 0 11-1.415 1.415L10 11.414l-.414.413a1 1 0 01-1.414-1.415L8.586 10 8.172 9.586a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="text-sm">
									{review.rating} stars
								</span>
							</div>
							<span className="text-sm">Review Date</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GameReviews;
