export default function Medicines({ params }: { params: { id: string } }) {
    return (
        <div className="bg-fourth">
            {params.id}
        </div>
    );
}
