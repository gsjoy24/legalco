import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, truncateContent }) => {
	const { content, image, subtitle, title, _id } = blog || {};
	const truncatedContent = truncateContent(content);

	return (
		<div className="card min-w-[310px] max-w-sm bg-white shadow-lg hover:bg-[#35878b2a] duration-200 mx-auto group ">
			<figure className="max-h-[200px] overflow-hidden">
				<img
					width={500}
					height={200}
					src={image ? image : 'https://i.ibb.co/Ytbhzg4/blank.jpg'}
					alt={title}
					className="group-hover:scale-110 duration-200"
				/>
			</figure>
			<div className="card-body">
				<p className="text-xs text-zinc-400">{subtitle}</p>
				<h2 className="text-lg font-bold">{title}</h2>
				<p className="text-slate-500">{truncatedContent}</p>
				<Link to={`/blogs/${_id}`} className="group flex items-center gap-2 text-blue-600 w-32">
					<span>Read more</span> <AiOutlineArrowRight className="group-hover:translate-x-1 duration-200" />
				</Link>
			</div>
		</div>
	);
};

export default BlogCard;
