import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";

const images = [
	{
		id: "1",
		src: "/photos/photo1.jpg",
		description: "Photo 1",
	},
	{
		id: "2",
		src: "/photos/photo2.jpg",
		description: "Photo 2",
	},
	{
		id: "3",
		src: "/photos/photo3.jpg",
		description: "Photo 3",
	},
	
	{
		id: "5",
		src: "/photos/photo5.jpg",
		description: "Photo 5",
	},
	{
		id: "6",
		src: "/photos/photo6.jpg",
		description: "Photo 6",
	},
  {
    id: "7",
    src: "/photos/photo7.jpg",
    description: "Photo 7",
  }
];

export default function PicturesPage() {
	return (
		<div className="min-h-screen flex flex-col bg-background">
			<Header />

			<main className="flex-1">
				<div className="container mx-auto py-12 px-4">
					{/* Title */}
					<div className="text-center mb-12">
						<h1 className="text-5xl md:text-6xl font-headline text-primary">
							Our Memories
						</h1>
						<p className="text-lg text-muted-foreground mt-2">
							Every picture tells a part of our story.
						</p>
					</div>

					{/* Gallery */}
					<div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
						{images.map((image) => (
							<div key={image.id} className="break-inside-avoid">
								<Card className="overflow-hidden group rounded-lg shadow-lg">
									<Image
										src={image.src}
										alt={image.description}
										width={600}
										height={400}
										className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
										priority={image.id === "1"}
									/>
								</Card>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
