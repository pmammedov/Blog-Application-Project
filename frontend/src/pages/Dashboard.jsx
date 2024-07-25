import { Box, Button, Typography } from '@mui/material';
import BlogCard from '../components/blogcard/BlogCard';
import Loading from '../assets/loading.gif'
import { useContext, useEffect, useState } from 'react';
import { BlogDataContext } from '../context/BlogContext';
import { blueGrey } from '@mui/material/colors'

const Dashboard = () => {
    const { blogPosts, getBlogPosts, setPage, page } = useContext(BlogDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getBlogPosts()
        setIsLoading(false)
    }, [page])

    if (isLoading) {
        return (
            <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <img src={Loading} alt="Loading..." width={'800'} />
            </div>
        )
    }
    // console.log(blogPosts)

    return (
        <>
            <Typography variant='h3' sx={{ fontFamily: 'Girassol, cursive', textAlign: 'center' }} >-Dashboard-</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginY: '1rem' }}>
                {blogPosts?.map((post, index) => (
                    <BlogCard blogData={post} key={index} />
                ))}
                {/* burda gelen data ekrana işleniyor */}
            </Box>
            {
                blogPosts.length === 0 && (
                    <Typography variant='h5' sx={{ textAlign: 'center', color: blueGrey[300] }} >No Blogs Found</Typography>
                )
            }
            {
                blogPosts.length > 6 && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', margin: '2rem auto' }}>
                        <Button onClick={() => setPage(page > 6 ? (page - 6) : (page))} variant="outlined" color="secondary" startIcon={null}>View Less</Button>
                        <Button onClick={() => setPage(page + 6)} variant="outlined" color="warning" startIcon={null}>View More</Button>
                    </Box>
                )
            }

        </>
    );
}
export default Dashboard

/* 
Lorem ipsum dolor sit, amet consectetur adipisicing elit.Est, consequuntur ?
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore laboriosam aspernatur ipsa! Similique excepturi quia eligendi dolores dolor pariatur libero, illo nihil voluptas provident quasi quibusdam ipsam magni saepe amet voluptates corporis et non ab quaerat eos ea earum labore. Corporis sequi, ipsum earum, consectetur suscipit quasi id harum voluptate eos molestias voluptas natus et aperiam ipsa iusto! Impedit eaque assumenda dicta, neque consequatur omnis, at ipsa non, distinctio provident maiores cum eveniet nulla. Dicta ratione reiciendis iste recusandae temporibus illum voluptatem dolorem quis unde accusantium omnis, iure minima voluptate explicabo repudiandae sequi consectetur sint provident corrupti et! Corrupti dignissimos quis blanditiis ut cumque deserunt, adipisci ipsam odio doloribus explicabo, autem laborum, perferendis provident ratione? Impedit qui quam ullam rem sit repellat! At voluptatum modi assumenda culpa rem impedit quidem, dolorem, amet numquam tempora fugit in, sequi quas repellat eveniet ipsa temporibus quasi consequuntur minus quae. Dolorum excepturi maxime dolor consequuntur provident velit corrupti iste, amet animi, repellendus dignissimos explicabo, quos quae nam dolores ab? Fuga repellat, dicta rem omnis architecto tenetur vel! Praesentium quasi libero quisquam explicabo tempore adipisci, eveniet sequi consectetur possimus sapiente! Distinctio cum quasi ipsa dolore placeat magni maxime odit quod, id culpa sunt porro a cupiditate asperiores maiores error dolor nostrum animi itaque voluptatem? Iusto minus neque dignissimos culpa ex ratione quo provident fuga? Dolorum, veritatis quibusdam, aut nisi nesciunt quos voluptates et sequi veniam ipsum alias nam dolores rem dolore in vel? Repellendus ratione dicta odit rerum maxime architecto quaerat id nostrum, itaque, amet harum ex, quis quas! Consequuntur, soluta voluptate, neque quibusdam quo sit unde atque perferendis, dolorum aspernatur modi expedita quasi numquam quisquam a fugit blanditiis perspiciatis. Fugiat doloribus eos necessitatibus temporibus accusamus voluptatum sunt natus, libero quo debitis perferendis dolores repellendus iure in, nostrum nobis accusantium assumenda illum officiis tempora esse! Adipisci consectetur totam esse! Culpa, nemo? Illum, accusantium sed inventore a perferendis quod itaque molestias porro expedita doloribus consequuntur! Eum, sint repellat quas dolorem repudiandae facilis laudantium. Sint consequatur rerum numquam et unde dolores officiis suscipit dolor odit aspernatur assumenda ipsam veritatis inventore dolorem, praesentium illum ducimus impedit repudiandae temporibus iure quos? Vitae facilis excepturi a enim aliquam reprehenderit, ratione et eligendi voluptatibus quam veritatis. Eos iste laboriosam facilis numquam animi aut exercitationem? Aperiam, ipsum veniam. Consequuntur corporis itaque et! Nulla illum voluptatem velit vel dolor. Sapiente iure cupiditate fugit fugiat quae eius odio nam, voluptas architecto alias totam. Tenetur minus quis, fuga quisquam obcaecati ad temporibus optio alias ducimus corporis sunt doloribus eos impedit nihil fugiat odio soluta veritatis, molestiae voluptatibus sint libero! Consequuntur officiis quis at mollitia quo voluptas, laboriosam enim cupiditate, earum ea doloribus recusandae et aliquid quas nesciunt. Repellat itaque sint asperiores soluta ab ratione quidem, tenetur voluptatibus eum error saepe dolores esse impedit inventore! Tenetur itaque atque in repellat a ab explicabo autem quisquam repellendus molestias aliquid provident, accusantium minus debitis ea tempora voluptate quos nostrum, facere nisi illo molestiae quod! Consequuntur doloremque quas facere vero! Perferendis sequi totam expedita amet assumenda hic? Dolorum ipsam tempora velit dicta quaerat repudiandae ipsum, officiis aspernatur omnis voluptatum atque iste soluta dolore quibusdam laborum harum amet modi eum veniam totam praesentium similique? Amet, natus veniam culpa nihil quae aperiam voluptatibus odio esse quas eligendi dolore exercitationem minima labore, ducimus, expedita officia sit? Ipsum exercitationem perferendis dolores eum! Eligendi enim debitis perspiciatis incidunt dolore quis maxime temporibus distinctio accusamus laborum facere nostrum officiis obcaecati blanditiis eius libero voluptatem possimus totam quibusdam aliquam itaque, modi quasi. Perferendis reprehenderit natus hic nihil laborum nobis expedita tempora sint explicabo, iste ratione reiciendis beatae dignissimos voluptatum. Numquam, maxime quas? Dolor, obcaecati culpa! 
*/