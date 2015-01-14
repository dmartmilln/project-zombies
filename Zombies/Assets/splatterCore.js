var drip : GameObject;
var hit : RaycastHit;

function Awake () 
{
        var x = -1;
        var drops = Random.Range (40, 80);

        while (x <= drops)
        {
            x ++;
            
            var fwd = transform.TransformDirection (Random.onUnitSphere * 5);
            
            {
                
                var scaler = Random.value;
                splatter.transform.localScale.x *= scaler;
                splatter.transform.localScale.z *= scaler;
                
                var rater = Random.Range (0, 359);
                splatter.transform.RotateAround (hit.point, hit.normal, rater);
                
                Destroy (splatter, 5);
        }
}