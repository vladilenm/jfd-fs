const comments = [
    {
        _id: "67rdca3eeb7f6fg",
        userId: "67rdca3eeb7f6fgeed471815",
        pageId: "67rdca3eeb7f6fgeed471815",
        content: "Lorem ipsum dolor",
        created_at: "1633576399367"
    },
    {
        _id: "67rdca3eeb7f6fgdasd",
        pageId: "67rdca3eeb7f6fgeed471815",
        userId: "67rdca3eeb7f6fgeed471815",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    },
    {
        _id: "67rdca3eeb7f6fgdaasd",
        pageId: "67rdca3eeb7f6fgeed471817",
        userId: "67rdca3eeb7f6fgeed471815",
        content: "Lorem ipsum dolor and etc",
        created_at: "1633573058520"
    }
];
if (!localStorage.getItem("comments")) {
    localStorage.setItem("comments", JSON.stringify(comments));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(comments);
        }, 200);
    });

const fetchCommentsForUser = (userId) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("comments")).filter(
                    (c) => c.pageId === userId
                )
            );
        }, 200);
    });
const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const comments = JSON.parse(localStorage.getItem("comments"));
            const newComment = {
                ...data,
                created_at: Date.now(),
                _id: Math.random().toString(36).substr(2, 9)
            };
            comments.push(newComment);
            localStorage.setItem("comments", JSON.stringify(comments));
            resolve(newComment);
        }, 200);
    });

const remove = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const comments = JSON.parse(localStorage.getItem("comments"));
            const newComments = comments.filter((x) => x._id !== id);
            console.log(id);
            console.log(newComments);
            localStorage.setItem("comments", JSON.stringify(newComments));
            resolve(id);
        }, 200);
    });
export default {
    fetchAll,
    fetchCommentsForUser,
    add,
    remove
};
