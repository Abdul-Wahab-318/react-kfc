import {useParams} from "react-router-dom";
function LeadText ()
{
    let {slug} = useParams()
    
    if(slug!== undefined)
    {
        slug = slug.replace(/-/g , " ")
    }

    if(slug==null) slug="Sharing Meals"
    return(
        <div className="container">
        <div className="lead-text-parent">
            <h1 className="lead-text">{slug}</h1>
        </div>
        </div>

    )
}

export default LeadText;